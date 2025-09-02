document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
      bookingForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const form = event.target;
          const formData = new FormData(form);
          const data = Object.fromEntries(formData.entries());

          const searchParams = new URLSearchParams({
              route: data.route,
              boatType: data['boat-type'],
              date: data['departure-date'],
              passengers: data.passengers
          });

          window.location.href = 'precos.html?' + searchParams.toString();
      });
  }
});