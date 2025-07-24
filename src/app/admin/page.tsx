import { cookies } from 'next/headers';
import fs from 'fs';
import path from 'path';
import AdminNavbar from '@/components/AdminNavbar';
import AdminFooter from '@/components/AdminFooter';
import LoginForm from '../../components/LoginForm';
import { RegistrationsDataTable } from '@/components/RegistrationsDataTable';

interface Registration {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  registrationDate: string;
  verified: boolean;
}

function getRegistrations(): Registration[] {
  const filePath = path.join(process.cwd(), 'data', 'registrations.json');
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  }
  return [];
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('auth')?.value === 'true';

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  const registrations = getRegistrations();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <AdminNavbar />
      <main className="flex-grow">
        <div className="container py-10 mx-auto">
          <h1 className="mb-4 text-3xl font-bold">Paid Registrations</h1>
          <RegistrationsDataTable initialData={registrations} />
        </div>
      </main>
      <AdminFooter />
    </div>
  );
}
