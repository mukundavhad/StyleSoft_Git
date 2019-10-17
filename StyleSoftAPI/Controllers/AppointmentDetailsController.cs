using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StyleSoft.Domain.Data.Contract;
using StyleSoft.Domain.Data.Models;
using Microsoft.AspNetCore.Authorization;
namespace StyleSoftAPI.Controllers
{
    //[Authorize][Produces("application/json")]
    [Produces("application/json")]
    [Route("api/AppointmentDetails/")]
    public class AppointmentDetailsController : Controller
    {
        private IRepositoryWrapper _repoWrapper;

        public AppointmentDetailsController(IRepositoryWrapper repoWrapper)
        {
            _repoWrapper = repoWrapper;
        }

        [HttpGet("[action]")]
        public int GetAppointmentNo()
        {
            try
            {
                int appointmentno = this._repoWrapper.Appointment.GetAppointmentNo();
                return appointmentno;
            }

            catch (Exception e)
            {
                return 0;
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<AppointmentView> GetAll()
        {
            var appointmentdetails = this._repoWrapper.Appointment.GetAllAppointmentDetails().ToList();
            return appointmentdetails;
        }

        //[HttpPost("GetByID")] 
        //public TblCustomerMaster GetByID([FromBody] int customerId)
        //{
        //    var Cusotmer = this._repoWrapper.Customer.FindByCondition(x=> x.CustomerId == customerId).FirstOrDefault();
        //    return Cusotmer;
        //}

        [HttpPost("Add")]
        public bool Add([FromBody] Appointment appointments)
        {
            try
            {
                this._repoWrapper.Appointment.Create(appointments);
                this._repoWrapper.Appointment.Save();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("Update")]
        public bool Update([FromBody] Appointment appointments)
        {
            try
            {
                this._repoWrapper.Appointment.Update(appointments);
                this._repoWrapper.Appointment.Save();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        [HttpPost("SaveAppointmentMaster")]
        public bool SaveAppointmentMaster([FromBody] Appointment appointmentMt)
        {
            try
            {
                this._repoWrapper.Appointment.SaveAppointmentMaster(appointmentMt);
                return true;
            }

            catch (Exception e)
            {
                return false;
            }
        }

        //[HttpPost("Delete")]
        //public bool Delete([FromBody] TblCustomerMaster customer)
        //{
        //    try
        //    {
        //        this._repoWrapper.Customer.Delete(customer);
        //        this._repoWrapper.Customer.Save();
        //        return true;
        //    }

        //    catch (Exception e)
        //    {
        //        return false;
        //    }
        //}
    }
}
