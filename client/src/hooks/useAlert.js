import Swal from 'sweetalert2';

export default function useAlert(){
  return (title,text,icon) => {
    Swal.fire({
      title,
      text,
      icon,
    });
  }
}