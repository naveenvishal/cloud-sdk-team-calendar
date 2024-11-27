import { User, pltUserManagementService } from './generated/plt-user-management-service';
//import { executeHttpRequest } from '@sap-cloud-sdk/http-client';

// Define a function to fetch direct reports
export async function getDirectReports(email: string): Promise<User[]> {
  // Create an instance of the UserApi
  //const userApi = new UserApi();
  const { userApi }  = pltUserManagementService();

  try {
    // Query the user to fetch direct reports based on email
    const userWithDirectReports = await userApi
      .requestBuilder()
      .getAll()
      .filter(userApi.schema.EMAIL.equals(email)) // Replace with the actual email field
      .select(userApi.schema.DIRECT_REPORTS) // Include the direct reports field
      //.expand(userApi.schema.DIRECT_REPORTS) // Fetch details of direct reports
      .execute({ destinationName: 'SFSF' }); // Ensure 'SFSF' destination is configured

    // Process and return the list of direct reports
    if (userWithDirectReports.length > 0) {
      return userWithDirectReports[0].directReports || [];
    }

    return [];
  } catch (error) {
    console.error('Error fetching direct reports:', error);
    throw new Error('Unable to fetch direct reports.');
  }
}

// Define a function to fetch indirect reports recursively
export async function getIndirectReports(directReports: User[]): Promise<User[]> {
  let allIndirectReports: User[] = [];

  for (const directReport of directReports) {
    try {
      const reports = await getDirectReports(directReport.email); // Recursively fetch reports
      allIndirectReports = allIndirectReports.concat(reports);

      if (reports.length > 0) {
        const subReports = await getIndirectReports(reports);
        allIndirectReports = allIndirectReports.concat(subReports);
      }
    } catch (error) {
      console.error(`Error fetching indirect reports for ${directReport.email}:`, error);
    }
  }

  return allIndirectReports;
}