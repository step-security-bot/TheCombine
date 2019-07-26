﻿using BackendFramework.ValueModels;
using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;

namespace BackendFramework.Interfaces
{
    public interface IUserEditService
    {
        Task<bool> AddStepToGoal(string projectId, string userEditId, int goalIndex, string userEdit);
        Task<Tuple<bool, int>> AddGoalToUserEdit(string projectId, string UserEditId, Edit edit);
    }
}
