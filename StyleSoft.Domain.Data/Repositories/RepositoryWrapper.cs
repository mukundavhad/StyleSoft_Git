using System;
using System.Collections.Generic;
using System.Text;
using StyleSoft.Domain.Data.Contract;
using StyleSoft.Domain.Data.Models;

namespace StyleSoft.Domain.Data.Repositories
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private StylesoftContext _repoContext;

        public RepositoryWrapper(StylesoftContext repositoryContext)
        {
            _repoContext = repositoryContext;
        }

        private SaloonDetailsRepository _saloon;

        private EnrolledSalonDetailsRepository _enrolledsalon;
        private AddressDetailsRepository _address;
        private CustomerDetailsRepository _customer;
        private StaffDetailsRepository _staff;
        private ServicesDetailsRepository _services;
        private AppointmentDetailsRepository _appointment;

        public IAppointmentDetailsRepository Appointment
        {
            get
            {
                if (_appointment == null)
                {
                    _appointment = new AppointmentDetailsRepository(_repoContext);
                }
                return _appointment;
            }
        }
        public IServicesDetailsRepository Services
        {
            get
            {
                if (_services == null)
                {
                    _services = new ServicesDetailsRepository(_repoContext);
                }
                return _services;
            }
        }

        public IStaffDetailsRepository Staff
        {
            get
            {
                if (_staff == null)
                {
                    _staff = new StaffDetailsRepository(_repoContext);
                }

                return _staff;
            }
        }
        public ICustomerDetailsRepository Customer
        {
            get
            {
                if (_customer == null)
                {
                    _customer = new CustomerDetailsRepository(_repoContext);
                }

                return _customer;
            }
        }
        public IAddressDetailsRepository Address
        {
            get
            {
                if (_address == null)
                {
                    _address = new AddressDetailsRepository(_repoContext);
                }

                return _address;
            }
        }
        public IEnrolledSalonDetailsRepository EnrolledSalon
        {
            get
            {
                if (_enrolledsalon == null)
                {
                    _enrolledsalon = new EnrolledSalonDetailsRepository(_repoContext);
                }

                return _enrolledsalon;
            }
        }
        public ISaloonDetailsRepository Saloon
        {
            get
            {
                if (_saloon == null)
                {
                    _saloon = new SaloonDetailsRepository(_repoContext);
                }

                return _saloon;
            }
        }
    }
}
