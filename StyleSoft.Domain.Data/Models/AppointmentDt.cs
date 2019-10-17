using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class AppointmentDt
    {
        public int PkId { get; set; }
        public int? AppointmentId { get; set; }
        public int? ServiceId { get; set; }
        public int? StaffId { get; set; }
        public string Time { get; set; }
        public decimal? Price { get; set; }
        public decimal? Discount { get; set; }
        public decimal? Total { get; set; }
        public bool? IsDeleted { get; set; }

        public Appointment Appointment { get; set; }
    }
}
