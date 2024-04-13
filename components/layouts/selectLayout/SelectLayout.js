import React from 'react';
import withAuth from '@components/reusable/hoc/auth';
const SelectLayout = () => {
  return (
    <>
      <div>Want to hire?</div>
      <div>Want to be hired?</div>
    </>
  );
};

export default withAuth(SelectLayout);
