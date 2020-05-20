import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// Registered map div container id
const mapDivId = 'MapContainer';

// Setup sample data
const user = new User();
const company = new Company();

// Create a map and register markers
const mapInScope = new CustomMap(mapDivId);
mapInScope.addMarker(user);
mapInScope.addMarker(company);
