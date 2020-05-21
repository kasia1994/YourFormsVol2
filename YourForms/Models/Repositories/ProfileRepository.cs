using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YourForms.Models.Database;
using YourForms.Models.Interfaces;

namespace YourForms.Models.Repositories
{
    public class ProfileRepository : IProfileRepository
    {
        private readonly DatabaseContext _databaseContext;

        public ProfileRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public int AddProfile(Profile profile)
        {
            if (profile==null)
            {
                throw new Exception("Profile object cannot be null");
            }

            profile.Id = 0;
            var creationDate = DateTime.Now.ToString("yyyyMMdd");
            _databaseContext.Profiles.FirstOrDefault(x => x.CreationDate == creationDate);
            _databaseContext.Profiles.Add(profile);
            _databaseContext.SaveChanges();

            return profile.Id;
        }

        public void DeleteProfile(Profile profile)
        {
            if (profile == null)
            {
                throw new Exception("Profile object cannot be null");
            }

            _databaseContext.Profiles.Remove(profile);
            _databaseContext.SaveChanges();
        }

        public List<Profile>GetAllProfiles()
        {
            return _databaseContext.Profiles.ToList();
        }

        public Profile GetProfile(int profileId)
        {
            if (profileId<=0)
            {
                throw new Exception("Id cannot be less than 0");
            }
            return _databaseContext.Profiles.Where(x => x.Id == profileId).FirstOrDefault();
        }

        public int UpdateProfile(Profile profile)
        {
            if (profile == null)
            {
                throw new Exception("Profile object cannot be null");
            }

            var lastUpdate = DateTime.Now.ToString("yyyyMMdd");
            _databaseContext.Profiles.FirstOrDefault(x => x.LastUpdate == lastUpdate);
            _databaseContext.Profiles.Update(profile);
            _databaseContext.SaveChanges();

            return profile.Id;
        }
    }
}
