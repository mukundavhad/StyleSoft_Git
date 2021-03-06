﻿using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class Appointment
    {
        public Appointment()
        {
            AppointmentDt = new HashSet<AppointmentDt>();
        }

        public int AppointmentId { get; set; }
        public int EnrolledSalonId { get; set; }
        public int ShopLocationId { get; set; }
        public string CustomerMobile { get; set; }
        public string RelationType { get; set; }
        public DateTime? AppointmentDate { get; set; }
        public string Remarks { get; set; }
        public decimal? GrandTotal { get; set; }
        public string Status { get; set; }
        public string CancelRemarks { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public EnrolledSalon EnrolledSalon { get; set; }
        public SalonLocation ShopLocation { get; set; }
        public ICollection<AppointmentDt> AppointmentDt { get; set; }
    }
}
