export interface UsersResponse {
 _id: string;
 username: string;
 fullName: {
   firstName: string;
   lastName: string;
 };
 age: string;  
 city: string;
 contact: {
   email: string;
   phone: string;
 };
 role_id: string;
 createdAt: string;
 updatedAt: string;
}
