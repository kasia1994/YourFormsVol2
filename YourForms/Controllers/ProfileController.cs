using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using YourForms.Models;
using YourForms.Models.Interfaces;
using YourForms.Models.Repositories;

namespace YourForms.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly IProfileRepository _profileRepository;

        public ProfileController(IProfileRepository profileRepository)
        {
            _profileRepository = profileRepository;
        }

        [HttpGet("[action]")]
        public IActionResult GetProfiles()
        {
            return new JsonResult(_profileRepository.GetAllProfiles());
        }

        [HttpPost("[action]")]
        public IActionResult AddProfile([FromBody]Profile profile)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _profileRepository.AddProfile(profile);

            return new JsonResult(profile.Id);
        }

        [HttpGet("[action]")]
        public IActionResult GetProfile(int profileId)
        {
            if (profileId <= 0)
            {
                return BadRequest("Id cannot be less than 0");
            }

            return new JsonResult(_profileRepository.GetProfile(profileId));
        }

        [HttpPost("[action]")]
        public IActionResult UpdateProfile([FromBody]Profile profile)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _profileRepository.UpdateProfile(profile);
            return new JsonResult(profile.Id);
        }

        [HttpGet("[action]")]
        public IActionResult DeleteProfile(int profileId)
        {
            if (profileId <= 0)
            {
                return BadRequest("Id cannot be less than 0");
            }

            var profile = _profileRepository.GetProfile(profileId);

            if (profile==null)
            {
                return NotFound("Cannot find profile with provided profileId");
            }

            _profileRepository.DeleteProfile(profile);
            return new JsonResult(profile.Id);
        }
    }
}