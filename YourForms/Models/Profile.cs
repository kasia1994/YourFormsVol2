using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourForms.Models
{
    public class Profile
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string BirthDate { get; set; }
        public string CreationDate { get; set; }
        public string LastUpdate { get; set; }
        public bool Gender { get; set; }
        public Nationalities Nationality { get; set; }
        public string Phone { get; set; }
        public string EmailAdress { get; set; }
        public bool IsActive { get; set; }

        public enum Nationalities
        {
            Poland=0,
            France=1,
            GreatBritain=2,
            Hungary=3,
            Russia=4,
        }


    }
}
