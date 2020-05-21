﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourForms.Models.Database
{
    public class DatabaseContext:IdentityDbContext
    {
        public DatabaseContext (DbContextOptions<DatabaseContext>options):base(options)
        {

        }

        public DbSet<Profile>Profiles { get; set; }
    }
}
