import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

function Success() {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  useEffect(() => {
    toast.success('Success!', { autoClose: 2000 });

    const redirectTimer = setTimeout(() => {
      navigate('/');
      window.location.reload();

    }, 7000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', margin: "40px"  }}>
      {/* Your success message content */}
      <div style={{ marginBottom: '20px', fontSize: '24px' }}>Success</div>

      {/* Additional content */}
      <p>This is some additional content. You can add more elements here.</p>

      {/* Confetti effect */}
      <Confetti width={width} height={height} />

      {/* ToastContainer for displaying notifications */}
      <ToastContainer />
    </div>
  );
}

export default Success;