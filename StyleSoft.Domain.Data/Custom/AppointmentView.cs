using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class AppointmentView
    {
        public int AppointmentId { get; set; }
        public int EnrolledSalonId { get; set; }
        public string OwnerName { get; set; }
        public int ShopLocationId { get; set; }
        public string Locality { get; set; }
        public string CustomerMobile { get; set; }
        public string RelationType { get; set; }
        public DateTime? AppointmentDate { get; set; }
        public string AppointmentTime { get; set; }
        public int? ServiceId { get; set; }
        public string ServiceName { get; set; }
        public string Status { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public EnrolledSalon EnrolledSalon { get; set; }
        //public Services Service { get; set; }
        public SalonLocation ShopLocation { get; set; }
    }
}
