import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    new Menu (1, 'Dashboard', '/', null, 'tachometer', null, false, 0),
    new Menu (40, 'Pages', null, null, 'file-text-o', null, true, 0),
    new Menu (43, 'Login', '/login', null, 'sign-in', null, false, 40),    
    new Menu (44, 'Register', '/register', null, 'registered', null, false, 40),
    new Menu(65, 'Enrolled Saloon', '/enrolledsalonview', null, 'file-o', null, false, 0),
    new Menu(65, 'Saloon Details', '/saloonview', null, 'file-o', null, false, 0),
    new Menu(65, 'Address Details', '/addressview', null, 'file-o', null, false, 0),
    new Menu(65, 'Customer Details', '/customerview', null, 'file-o', null, false, 0),
    new Menu(65, 'Staff Details', '/staffview', null, 'file-o', null, false, 0),
    new Menu(65, 'Service Category', '/servicecategoryview', null, 'file-o', null, false, 0),
    new Menu(65, 'Services', '/servicesview', null, 'file-o', null, false, 0),
    new Menu(65, 'Appointment', '/appointmentview', null, 'file-o', null, false, 0),
    new Menu (45, 'Blank', '/blank', null, 'file-o', null, false, 40),
    new Menu (46, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 40),   
    new Menu (140, 'Level 1', null, null, 'folder-open-o', null, true, 0),
    new Menu (141, 'Level 2', null, null, 'folder-open-o', null, true, 140),
    new Menu (142, 'Level 3', null, null, 'folder-open-o', null, true, 141),
    new Menu (143, 'Level 4', null, null, 'folder-open-o', null, true, 142),
    new Menu (144, 'Level 5', null, null, 'folder-o', null, false, 143),
    new Menu (200, 'External Link', null, 'http://themeseason.com', 'external-link', '_blank', false, 0)
]

export const horizontalMenuItems = [ 
    new Menu (1, 'Dashboard', '/', null, 'tachometer', null, false, 0),
    new Menu (40, 'Pages', null, null, 'file-text-o', null, true, 0),
    new Menu (43, 'Login', '/login', null, 'sign-in', null, false, 0),    
    new Menu (44, 'Register', '/register', null, 'registered', null, false, 0),
    new Menu(65, 'Enrolled Saloon', '/enrolledsalonview', null, 'file-o', null, false, 0),
    new Menu(66, 'Saloon View Details', '/saloonview', null, 'file-o', null, false, 0),
    new Menu(65, 'Address Details', '/addressview', null, 'file-o', null, false, 0),
    new Menu(65, 'Customer Details', '/customerview', null, 'file-o', null, false, 0),
    new Menu(65, 'Staff Details', '/staffview', null, 'file-o', null, false, 0),
    new Menu(65, 'Service Category', '/servicecategoryview', null, 'file-o', null, false, 0),
    new Menu(65, 'Services', '/servicesview', null, 'file-o', null, false, 0),
    new Menu(65, 'Appointment', '/appointmentview', null, 'file-o', null, false, 0),
    new Menu (45, 'Blank', '/blank', null, 'file-o', null, false, 40),
    new Menu (46, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 40),
    new Menu (200, 'External Link', null, 'http://themeseason.com', 'external-link', '_blank', false, 0)
]