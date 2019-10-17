using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class SalonLocation
    {
        public SalonLocation()
        {
            Appointment = new HashSet<Appointment>();
            Offers = new HashSet<Offers>();
            Services = new HashSet<Services>();
            StaffDetails = new HashSet<StaffDetails>();
            Token = new HashSet<Token>();
        }

        public int ShopLocationId { get; set; }
        public int EnrolledSalonId { get; set; }
        public DateTime? EnrolmentDate { get; set; }
        public string ShopName { get; set; }
        public string ShopAddress1 { get; set; }
        public string ShopAddress2 { get; set; }
        public string Locality { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PinCode { get; set; }
        public decimal? Cgst { get; set; }
        public decimal? Sgst { get; set; }

        public EnrolledSalon EnrolledSalon { get; set; }
        public ICollection<Appointment> Appointment { get; set; }
        public ICollection<Offers> Offers { get; set; }
        public ICollection<Services> Services { get; set; }
        public ICollection<StaffDetails> StaffDetails { get; set; }
        public ICollection<Token> Token { get; set; }
    }
}
