using System;
using System.Collections.Generic;

namespace StyleSoft.Domain.Data.Models
{
    public partial class TblUserRole
    {
        public TblUserRole()
        {
            TblUserInfo = new HashSet<TblUserInfo>();
            TblUserRolePermission = new HashSet<TblUserRolePermission>();
        }

        public int RoleId { get; set; }
        public string RoleName { get; set; }

        public ICollection<TblUserInfo> TblUserInfo { get; set; }
        public ICollection<TblUserRolePermission> TblUserRolePermission { get; set; }
    }
}
