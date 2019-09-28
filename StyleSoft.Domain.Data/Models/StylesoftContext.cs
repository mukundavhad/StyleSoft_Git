using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace StyleSoft.Domain.Data.Models
{
    public partial class StylesoftContext : DbContext
    {
        public StylesoftContext()
        {
        }

        public StylesoftContext(DbContextOptions<StylesoftContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Address { get; set; }
        public virtual DbSet<Appointment> Appointment { get; set; }
        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<EnrolledSalon> EnrolledSalon { get; set; }
        public virtual DbSet<Offers> Offers { get; set; }
        public virtual DbSet<SalonLocation> SalonLocation { get; set; }
        public virtual DbSet<ServiceCategory> ServiceCategory { get; set; }
        public virtual DbSet<Services> Services { get; set; }
        public virtual DbSet<StaffDetails> StaffDetails { get; set; }
        public virtual DbSet<TblUserInfo> TblUserInfo { get; set; }
        public virtual DbSet<TblUserRole> TblUserRole { get; set; }
        public virtual DbSet<TblUserRolePermission> TblUserRolePermission { get; set; }
        public virtual DbSet<Token> Token { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=ADMIN-PC\\SQLEXPRESS;Database=Stylesoft1;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Address>(entity =>
            {
                entity.Property(e => e.Address1)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Address2)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.Locality)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Mobile)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PinCode)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Appointment>(entity =>
            {
                entity.Property(e => e.AppointmentDate).HasColumnType("datetime");

                entity.Property(e => e.AppointmentTime).IsRowVersion();

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.CustomerMobile)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.RelationType)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.HasOne(d => d.EnrolledSalon)
                    .WithMany(p => p.Appointment)
                    .HasForeignKey(d => d.EnrolledSalonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Appointment_EnrolledSalon");

                entity.HasOne(d => d.Service)
                    .WithMany(p => p.Appointment)
                    .HasForeignKey(d => d.ServiceId)
                    .HasConstraintName("FK_Appointment_services");

                entity.HasOne(d => d.ShopLocation)
                    .WithMany(p => p.Appointment)
                    .HasForeignKey(d => d.ShopLocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Appointment_ShopLocation");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.Property(e => e.AlternateContact)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.CustomerMobile)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateofBirth).HasColumnType("datetime");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RelationType)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<EnrolledSalon>(entity =>
            {
                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.SalonOwnerEmailId)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.SalonOwnerMobile)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.SalonOwnerName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Offers>(entity =>
            {
                entity.HasKey(e => e.OfferId);

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.OfferBeginDate).HasColumnType("datetime");

                entity.Property(e => e.OfferDate).HasColumnType("datetime");

                entity.Property(e => e.OfferDescription)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OfferType)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.OfferValidUntil).HasColumnType("datetime");

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.HasOne(d => d.EnrolledSalon)
                    .WithMany(p => p.Offers)
                    .HasForeignKey(d => d.EnrolledSalonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Offers_EnrollSalon");

                entity.HasOne(d => d.ShopLocation)
                    .WithMany(p => p.Offers)
                    .HasForeignKey(d => d.ShopLocationId)
                    .HasConstraintName("FK_Offers_ShopLocation");
            });

            modelBuilder.Entity<SalonLocation>(entity =>
            {
                entity.HasKey(e => e.ShopLocationId);

                entity.Property(e => e.City)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EnrolmentDate).HasColumnType("datetime");

                entity.Property(e => e.Locality)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PinCode)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ShopAddress1)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ShopAddress2)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ShopName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ServiceCategory>(entity =>
            {
                entity.HasKey(e => e.CategoryId);

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Services>(entity =>
            {
                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.Gender)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ServiceDescription)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ServiceDuration).IsRowVersion();

                entity.Property(e => e.ServiceName)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Services)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Services_Services_CategoryId");

                entity.HasOne(d => d.EnrolledSalon)
                    .WithMany(p => p.Services)
                    .HasForeignKey(d => d.EnrolledSalonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Services_EnrolledSalon");

                entity.HasOne(d => d.ShopLocation)
                    .WithMany(p => p.Services)
                    .HasForeignKey(d => d.ShopLocationId)
                    .HasConstraintName("FK_Services_ShopLocation");
            });

            modelBuilder.Entity<StaffDetails>(entity =>
            {
                entity.HasKey(e => e.StaffId);

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.CurrentlyWorkingInd)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SalonOwnerMobile)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.StaffMobileNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.StaffName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.HasOne(d => d.ShopLocation)
                    .WithMany(p => p.StaffDetails)
                    .HasForeignKey(d => d.ShopLocationId)
                    .HasConstraintName("FK_Staff_ShopLocation");
            });

            modelBuilder.Entity<TblUserInfo>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("tbl_UserInfo");

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.Token)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.Property(e => e.UserEmail).HasMaxLength(50);

                entity.Property(e => e.Username).HasMaxLength(50);

                entity.Property(e => e.Userpassword).HasMaxLength(50);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.TblUserInfo)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_tbl_tbl_UserInfo_tbl_UserRoles");
            });

            modelBuilder.Entity<TblUserRole>(entity =>
            {
                entity.HasKey(e => e.RoleId);

                entity.ToTable("tbl_UserRole");

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<TblUserRolePermission>(entity =>
            {
                entity.HasKey(e => e.PkId);

                entity.ToTable("tbl_UserRolePermission");

                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.RolePagesPermission)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.TblUserRolePermission)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_tbl_UserRolePermission_tbl_UserRoles");
            });

            modelBuilder.Entity<Token>(entity =>
            {
                entity.Property(e => e.CreateDate).HasColumnType("datetime");

                entity.Property(e => e.CustomerMobile)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.RelationType)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TokenDate).HasColumnType("datetime");

                entity.Property(e => e.TokenNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TokenStatus)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TokenTime).IsRowVersion();

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.HasOne(d => d.EnrolledSalon)
                    .WithMany(p => p.Token)
                    .HasForeignKey(d => d.EnrolledSalonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Token_EnrolledSalon");

                entity.HasOne(d => d.Service)
                    .WithMany(p => p.Token)
                    .HasForeignKey(d => d.ServiceId)
                    .HasConstraintName("FK_Token_Service");

                entity.HasOne(d => d.ShopLocation)
                    .WithMany(p => p.Token)
                    .HasForeignKey(d => d.ShopLocationId)
                    .HasConstraintName("FK_Token_ShopLocation");

                entity.HasOne(d => d.Staff)
                    .WithMany(p => p.Token)
                    .HasForeignKey(d => d.StaffId)
                    .HasConstraintName("FK_Token_Staff");
            });
        }
    }
}
