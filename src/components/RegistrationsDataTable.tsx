'use client';
import React, { useState, useMemo } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/Table';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { useRouter } from 'next/navigation';

interface Registration {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  registrationDate: string;
  verified: boolean;
}

interface Props {
  initialData: Registration[];
}

export const RegistrationsDataTable: React.FC<Props> = ({ initialData }) => {
  const [data, setData] = useState<Registration[]>(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Registration; direction: 'ascending' | 'descending' } | null>(null);
  const router = useRouter();

  const sortedData = useMemo(() => {
    const sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    } else {
        // Default sort by date
        sortableData.sort((a, b) => new Date(b.registrationDate).getTime() - new Date(a.registrationDate).getTime());
    }
    return sortableData;
  }, [data, sortConfig]);

  const filteredData = sortedData.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const requestSort = (key: keyof Registration) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleVerify = async (id: string) => {
    try {
      const response = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        const updatedRegistration = await response.json();
        setData(data.map(reg => reg.id === id ? updatedRegistration : reg));
        router.refresh();
      } else {
        console.error('Failed to verify registration');
      }
    } catch (error) {
      console.error('Error verifying registration:', error);
    }
  };

  const totalCount = data.length;
  const verifiedCount = data.filter(reg => reg.verified).length;

  return (
    <div>
        <div className="mb-4 flex justify-between items-center">
            <div className="flex space-x-4">
                <p>Total Registrations: <span className="font-bold">{totalCount}</span></p>
                <p>Verified: <span className="font-bold text-green-600">{verifiedCount}</span></p>
            </div>
            <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                className="max-w-sm"
            />
        </div>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead onClick={() => requestSort('firstName')}>First Name</TableHead>
              <TableHead onClick={() => requestSort('lastName')}>Last Name</TableHead>
              <TableHead onClick={() => requestSort('phone')}>Phone</TableHead>
              <TableHead onClick={() => requestSort('email')}>Email</TableHead>
              <TableHead onClick={() => requestSort('registrationDate')}>Registration Date</TableHead>
              <TableHead onClick={() => requestSort('verified')}>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((reg) => (
              <TableRow key={reg.id}>
                <TableCell>{reg.firstName}</TableCell>
                <TableCell>{reg.lastName}</TableCell>
                <TableCell>{reg.phone}</TableCell>
                <TableCell>{reg.email}</TableCell>
                <TableCell>{new Date(reg.registrationDate).toLocaleString()}</TableCell>
                <TableCell>
                  {reg.verified ? (
                    <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">Verified</span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-200 rounded-full">Pending</span>
                  )}
                </TableCell>
                <TableCell>
                  {!reg.verified && (
                    <Button onClick={() => handleVerify(reg.id)} size="sm" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Verify
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
