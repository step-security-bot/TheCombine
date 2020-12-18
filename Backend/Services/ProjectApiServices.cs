using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BackendFramework.Helper;
using BackendFramework.Interfaces;
using BackendFramework.Models;
using MongoDB.Driver;
using MimeKit;

namespace BackendFramework.Services
{
    /// <summary> Atomic database functions for <see cref="Project"/>s </summary>
    public class ProjectService : IProjectService
    {
        private readonly IProjectContext _projectDatabase;
        private readonly IUserService _userService;
        private readonly IUserRoleService _userRoleService;
        private readonly IEmailService _emailService;

        public ProjectService(IProjectContext collectionSettings, IUserService userService, IUserRoleService userRoleService, IEmailService emailService)
        {
            _projectDatabase = collectionSettings;
            _userService = userService;
            _userRoleService = userRoleService;
            _emailService = emailService;
        }

        /// <summary> Finds all <see cref="Project"/>s </summary>
        public async Task<List<Project>> GetAllProjects()
        {
            return await _projectDatabase.Projects.Find(_ => true).ToListAsync();
        }

        /// <summary> Removes all <see cref="Project"/>s </summary>
        /// <returns> A bool: success of operation </returns>
        public async Task<bool> DeleteAllProjects()
        {
            var deleted = await _projectDatabase.Projects.DeleteManyAsync(_ => true);
            return deleted.DeletedCount != 0;
        }

        /// <summary> Finds <see cref="Project"/> with specified projectId </summary>
        public async Task<Project> GetProject(string projectId)
        {
            var filterDef = new FilterDefinitionBuilder<Project>();
            var filter = filterDef.Eq(x => x.Id, projectId);

            var projectList = await _projectDatabase.Projects.FindAsync(filter);

            return projectList.FirstOrDefault();
        }

        /// <summary> Adds a <see cref="Project"/> </summary>
        /// <returns> The project created </returns>
        public async Task<Project> Create(Project project)
        {
            await _projectDatabase.Projects.InsertOneAsync(project);
            return project;
        }

        /// <summary> Removes <see cref="Project"/> with specified projectId </summary>
        /// <returns> A bool: success of operation </returns>
        public async Task<bool> Delete(string projectId)
        {
            var deleted = await _projectDatabase.Projects.DeleteOneAsync(x => x.Id == projectId);
            return deleted.DeletedCount > 0;
        }

        /// <summary> Updates <see cref="Project"/> with specified projectId </summary>
        /// <returns> A <see cref="ResultOfUpdate"/> enum: success of operation </returns>
        public async Task<ResultOfUpdate> Update(string projectId, Project project)
        {
            var filter = Builders<Project>.Filter.Eq(x => x.Id, projectId);

            // Note: Nulls out values not in update body
            var updateDef = Builders<Project>.Update
                .Set(x => x.Name, project.Name)
                .Set(x => x.IsActive, project.IsActive)
                .Set(x => x.LiftImported, project.LiftImported)
                .Set(x => x.SemanticDomains, project.SemanticDomains)
                .Set(x => x.VernacularWritingSystem, project.VernacularWritingSystem)
                .Set(x => x.AnalysisWritingSystems, project.AnalysisWritingSystems)
                .Set(x => x.ValidCharacters, project.ValidCharacters)
                .Set(x => x.RejectedCharacters, project.RejectedCharacters)
                .Set(x => x.CustomFields, project.CustomFields)
                .Set(x => x.WordFields, project.WordFields)
                .Set(x => x.PartsOfSpeech, project.PartsOfSpeech)
                .Set(x => x.AutocompleteSetting, project.AutocompleteSetting)
                .Set(x => x.InviteTokens, project.InviteTokens);

            var updateResult = await _projectDatabase.Projects.UpdateOneAsync(filter, updateDef);

            if (!updateResult.IsAcknowledged)
            {
                return ResultOfUpdate.NotFound;
            }
            else if (updateResult.ModifiedCount > 0)
            {
                return ResultOfUpdate.Updated;
            }
            else
            {
                return ResultOfUpdate.NoChange;
            }
        }

        public async Task<string> CreateLinkWithToken(Project project, string emailAddress)
        {
            var token = new EmailInvite(2, emailAddress);
            project.InviteTokens.Add(token);
            await Update(project.Id, project);

            var linkWithIdentifier = "/invite/" + project.Id + "/" + token.Token;
            return linkWithIdentifier;
        }

        public async Task<bool> EmailLink(string emailAddress, string emailMessage, string link, string domain, Project project)
        {
            // create email
            var message = new MimeMessage();
            message.To.Add(new MailboxAddress("FutureCombineUser", emailAddress));
            message.Subject = "TheCombine Project Invite";
            message.Body = new TextPart("plain")
            {
                Text = $"You have been invited to a TheCombine project called {project.Name}. \n" +
                       $"To become a member of this project, go to {domain}{link}. \n\n" +
                       $"Message from Project Admin: {emailMessage} \n\n" +
                       "If you did not expect an invite please ignore this email."
            };
            return await _emailService.SendEmail(message);
        }

        public async Task<bool> RemoveTokenAndCreateUserRole(Project project, User user, EmailInvite emailInvite)
        {
            try
            {
                var userRole = new UserRole
                {
                    Permissions = new List<int>
                {
                    (int) Permission.MergeAndCharSet,
                    (int) Permission.Unused,
                    (int) Permission.WordEntry
                },
                    ProjectId = project.Id
                };
                userRole = await _userRoleService.Create(userRole);

                // Generate the userRoles and update the user
                user.ProjectRoles.Add(project.Id, userRole.Id);
                await _userService.Update(user.Id, user);
                // Generate the JWT based on those new userRoles
                var updatedUser = await _userService.MakeJwt(user);
                if (updatedUser is null)
                {
                    throw new Exception("Unable to generate JWT.");
                }

                await _userService.Update(updatedUser.Id, updatedUser);

                // Removes token and updates user

                project.InviteTokens.Remove(emailInvite);
                await Update(project.Id, project);

                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<bool> DuplicateCheck(string projectName)
        {
            var projects = await GetAllProjects();
            foreach (var project in projects)
            {
                if (project.Name == projectName)
                {
                    return true;
                }
            }
            return false;
        }

        public async Task<bool> CanImportLift(string projectId)
        {
            var project = await GetProject(projectId);
            return !project.LiftImported;
        }
    }
}
