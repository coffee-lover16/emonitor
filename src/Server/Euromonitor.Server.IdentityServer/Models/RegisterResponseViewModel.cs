﻿using Euromonitor.Server.IdentityServer.Infrastructure.Data.Identity;

namespace Euromonitor.Server.IdentityServer.Models
{
    public class RegisterResponseViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public RegisterResponseViewModel(AppUser user)
        {
            Id = user.Id;
            Name = user.Name;
            Email = user.Email;
        }
    }
}
