using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class TblUserRolePermission
    {
        public int PkId { get; set; }
        public int? RoleId { get; set; }
        public string RolePagesPermission { get; set; }
        public DateTime? CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }

        public TblUserRole Role { get; set; }
    }
}
