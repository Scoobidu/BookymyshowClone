import React from "react";
import { useEffect, useState } from "react";

const BookingData = () => {
  const [bookingInfo, setBookingInfo] = useState([]);

  // -----fetching data from the backend ------
  useEffect(() => {
    const fetchData = async () => {
      return fetch("https://bmsbackend.onrender.com/api/all-bookings")
        .then((response) => response.json())
        .then((data) => {
          setBookingInfo(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
    // console.log(bookingInfo);
  });

  return (
    <>
      <div className='flex '>
        <h3 className='w-8/12 mb-3'>All Bookings</h3>
        <p className='self-end justify-self-end'>
          Total Bookings : {bookingInfo.length}
        </p>
      </div>
      <div className='flex flex-col-reverse'>
        {/*-------- If no bookings ---------*/}
        {bookingInfo.length == 0 ? (
          <div className='text-center'>no previous booking found</div>
        ) : (
          // -------If bookings -------------

          bookingInfo.map((info, index) => (
            <div className='mb-4' key={index}>
              <div className='border-2 rounded-2xl p-4 mb-7 bg-white'>
                <h4>Last Booking Details</h4>
                <p className='font-bold mb-1'>Seats:</p>
                {Object.entries(info.seats).map(([seat, count]) => (
                  <p key={seat} className='mb-1'>
                    <span className='font-bold'>{seat}: </span>
                    {count}
                  </p>
                ))}

                <p className=' mb-1'>
                  <span className='font-bold'>Slot: </span>
                  {info.slot}
                </p>
                <p className=' mb-1'>
                  <span className='font-bold'>Movie: </span>
                  {info.movie}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default BookingData;
