using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class Appointment
    {
        public int SrNo { get; set; }
        public string SalonOwnerMobile { get; set; }
        public int? ShopLocationId { get; set; }
        public string CustomerMobile { get; set; }
        public string RelationType { get; set; }
        public DateTime? AppointmentDate { get; set; }
        public byte[] AppointmentTime { get; set; }
        public string ServiceId { get; set; }
        public string Status { get; set; }
    }
}
