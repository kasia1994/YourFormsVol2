using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourForms.Models.Interfaces
{
    public interface IProfileRepository
    {
        List<Profile> GetAllProfiles();
        Profile GetProfile(int profileId);
        int AddProfile(Profile profile);
        int UpdateProfile(Profile profile);
        void DeleteProfile(Profile profile);
    }
}
