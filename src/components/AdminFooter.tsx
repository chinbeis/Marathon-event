import React from 'react';

const AdminFooter: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Soul Relay Admin</p>
      </div>
    </footer>
  );
};

export default AdminFooter;
