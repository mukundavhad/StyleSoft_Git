using System;
using System.Collections.Generic;
using System.Text;
using System.Linq.Expressions;
using System.Linq;
using StyleSoft.Domain.Data.Contract;
using StyleSoft.Domain.Data.Models;
using StyleSoft.Domain.Data.Repositories;
using Microsoft.EntityFrameworkCore;

namespace StyleSoft.Domain.Data.Repositories
{
    public class AppointmentDetailsRepository : RepositoryBase<Appointment>, IAppointmentDetailsRepository
    {
        private StylesoftContext ktConContext;
        public AppointmentDetailsRepository(StylesoftContext ktConContext) : base(ktConContext)
        {
            this.ktConContext = ktConContext;
        }

        public int GetAppointmentNo()
        {
            int maxAppointmentNo = this.ktConContext.Appointment.Select(p => p.AppointmentId).DefaultIfEmpty(0).Max() + 1;
            return maxAppointmentNo;
        }

        public IEnumerable<AppointmentView> GetAllAppointmentDetails()
        {
            var appointments= (from s in this.ktConContext.Appointment
                               join e in this.ktConContext.EnrolledSalon
                            on s.EnrolledSalonId equals e.EnrolledSalonId
                            join sl in this.ktConContext.SalonLocation
                            on s.ShopLocationId equals sl.ShopLocationId
                            //join c in this.ktConContext.Services
                            //on s.ServiceId equals c.ServicesId
                            select new AppointmentView
                            {
                                AppointmentId = s.AppointmentId,
                                EnrolledSalonId = s.EnrolledSalonId,
                                OwnerName = e.SalonOwnerName,
                                ShopLocationId = s.ShopLocationId,
                                Locality = sl.Locality,
                                //ServiceId = s.ServiceId,
                                //ServiceName = c.ServiceName,
                                CustomerMobile = s.CustomerMobile,
                                RelationType = s.RelationType,
                                AppointmentDate = s.AppointmentDate,
                                //AppointmentTime = s.AppointmentTime,
                                Status = s.Status

                            });
            return appointments.ToList();
        }

        public void SaveAppointmentMaster(Appointment master)
        {
            //if (master.BillId > 0)
            //{
            //var toBeDeleteDT = this.RepositoryContext.Set<TblPurchaseBillReturnDt>().Where(s => s.BillId == master.BillId);
            //RepositoryContext.RemoveRange(toBeDeleteDT);
            //this.RepositoryContext.SaveChanges();
            //this.RepositoryContext.Set<TblStockDetails>().AddRange(stockList);
            //this.RepositoryContext.Set<TblPurchaseBillReturnMt>().Update(master);
            //this.RepositoryContext.SaveChanges();
            //}
            //else
            //{
            this.RepositoryContext.Set<Appointment>().Add(master);
            this.RepositoryContext.SaveChanges();
            //}
        }

        bool IAppointmentDetailsRepository.Authenticate()
        {
            return true;
        }
    }
}
