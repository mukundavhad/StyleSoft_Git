using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class EnrolledSalon
    {
        public EnrolledSalon()
        {
            Appointment = new HashSet<Appointment>();
            Offers = new HashSet<Offers>();
            Services = new HashSet<Services>();
            Token = new HashSet<Token>();
        }

        public int EnrolledSalonId { get; set; }
        public string SalonOwnerMobile { get; set; }
        public string SalonOwnerName { get; set; }
        public string SalonOwnerEmailId { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public ICollection<Appointment> Appointment { get; set; }
        public ICollection<Offers> Offers { get; set; }
        public ICollection<Services> Services { get; set; }
        public ICollection<Token> Token { get; set; }
    }
}
