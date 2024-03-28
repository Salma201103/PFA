
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from '../components/LastestDestinationCard';
import { FaCalendarAlt } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import { BsMoonStarsFill } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );
  const topRowHotels = hotels?.slice(0, 2) || [];
  const additionalHotels = [
    {
      _id: "1",
      name: "ARGENTINE & CHILI",
      imageUrls: ["https://activetravel.com.tn/public/images/image/voyage-organise-argentine1_0.53831300-1703252885.jpg"],
      description: (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '-20px', marginRight: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SiGooglemaps className="mr-1" /> <span>ARGENTINE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BsMoonStarsFill className="mr-1" /> <span> 15 jours/</span>
          <br />
        </div>
        <p>13 nuits </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AiOutlineCheck className="mr-1" /> <span>Avec Visa</span>
        </div>
        <br />
        <span style={{ marginLeft: '3px',fontWeight: 'bold'}}>Nos Départs</span><br />
        <hr />
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0px' }}>
          <FaCalendarAlt className="mr-1" /><span style={{ color: 'black' }}>Du </span>
        </div>
        <p style={{ fontWeight: 'bold', color :'#1c2e4a' }}>01/05/2024 <br /></p> Au <p style={{ fontWeight: 'bold', color :'#1c2e4a'}}>07/05/2024 </p>
      </div>
      
      
      ),
      pricePerNight: 8990,
      departureDates: [
        {
          startDate: "01/05/2024",
          endDate: "07/05/2024",
        },
        
      ],
    },
    {
      _id: "2",
      name: "VOYAGE ORGANISÉ TURQUIE",
      imageUrls: ["https://activetravel.com.tn/public/images/image/image_0.42248900-1648561484.jpg"],
      description: (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '-20px', marginRight: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SiGooglemaps className="mr-1" /> <span>TURQUIE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BsMoonStarsFill className="mr-1" /> <span> 9 jours/</span>
          <br />
        </div>
        <p>8 nuits </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AiOutlineCheck className="mr-1" /> <span>Avec Visa</span>
        </div>
        <br />
        <span style={{ marginLeft: '3px',fontWeight: 'bold'}}>Nos Départs</span><br />
        <hr />
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0px' }}>
          <FaCalendarAlt className="mr-1" /><span style={{ color: 'black' }}>Du </span>
        </div>
        <p style={{ fontWeight: 'bold', color :'#1c2e4a' }}> 25/04/2024<br /></p> Au <p style={{ fontWeight: 'bold', color :'#1c2e4a'}}>03/05/2024</p>
      </div>
      
      
      ),
      pricePerNight:3990,
      departureDates: [
        {
          startDate: "  25/04/2024",
          endDate: "03/05/2024",
        },
        
      ],
    },
    {
      _id: "3",
      name: "VOYAGE ORGANISÉ PORTUGAL",
      imageUrls: ["https://activetravel.com.tn/public/images/image/voyage-organise-dourou1_0.84174400-1706009674.jpg"],
      description: (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '-20px', marginRight: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SiGooglemaps className="mr-1" /> <span>PORTUGAL</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BsMoonStarsFill className="mr-1" /> <span> 8 jours/</span>
          <br />
        </div>
        <p>7 nuits </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AiOutlineCheck className="mr-1" /> <span>Avec Visa</span>
        </div>
        <br />
        <span style={{ marginLeft: '3px',fontWeight: 'bold'}}>Nos Départs</span><br />
        <hr />
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0px' }}>
          <FaCalendarAlt className="mr-1" /><span style={{ color: 'black' }}>Du </span>
        </div>
        <p style={{ fontWeight: 'bold', color :'#1c2e4a' }}>10/06/2024<br /></p> Au <p style={{ fontWeight: 'bold', color :'#1c2e4a'}}>17/06/2024</p>
      </div>
      
      
      ),
      pricePerNight:6990,
      departureDates: [
        {
          startDate: " 10/06/2024",
          endDate: "17/06/2024",
        },
        
      ],
    },
    {
      _id: "4",
      name: "VOYAGE ORGANISÉ TANZANIE ZANZIBAR",
      imageUrls: ["https://activetravel.com.tn/public/images/image/tanzanie1_0.46856500-1709027235.jpg"],
      description: (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '-20px', marginRight: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SiGooglemaps className="mr-1" /> <span> TANZANIE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BsMoonStarsFill className="mr-1" /> <span> 10 jours/</span>
          <br />
        </div>
        <p>9 nuits </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AiOutlineCheck className="mr-1" /> <span>Avec Visa</span>
        </div>
        <br />
        <span style={{ marginLeft: '3px',fontWeight: 'bold'}}>Nos Départs</span><br />
        <hr />
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0px' }}>
          <FaCalendarAlt className="mr-1" /><span style={{ color: 'black' }}>Du </span>
        </div>
        <p style={{ fontWeight: 'bold', color :'#1c2e4a' }}>01/05/2024 <br /></p> Au <p style={{ fontWeight: 'bold', color :'#1c2e4a'}}>07/05/2024 </p>
      </div>
      
      
      ),
      pricePerNight: 9990,
      departureDates: [
        {
          startDate: "01/05/2024",
          endDate: "07/05/2024",
        },
        
      ],
    },
    {
      _id: "5",
      name: "VOYAGE OUZBÉKISTAN",
      imageUrls: ["https://activetravel.com.tn/public/images/image/voyage-organise-ouzbekistan1_0.48107600-1687343906.webp"],
      description: (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '-20px', marginRight: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SiGooglemaps className="mr-1" /> <span>OUZBÉKISTAN</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BsMoonStarsFill className="mr-1" /> <span> 11 jours/</span>
          <br />
        </div>
        <p>10 nuits </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AiOutlineCheck className="mr-1" /> <span>Avec Visa</span>
        </div>
        <br />
        <span style={{ marginLeft: '3px',fontWeight: 'bold'}}>Nos Départs</span><br />
        <hr />
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0px' }}>
          <FaCalendarAlt className="mr-1" /><span style={{ color: 'black' }}>Du </span>
        </div>
        <p style={{ fontWeight: 'bold', color :'#1c2e4a' }}>20/09/2024  <br /></p> Au <p style={{ fontWeight: 'bold', color :'#1c2e4a'}}>30/09/2024  </p>
      </div>
      
      
      ),
      pricePerNight: 7750,
      departureDates: [
        {
          startDate: "20/09/2024 ",
          endDate: "30/09/2024 ",
        },
        
      ],
    },
    {
      _id: "6",
      name: "REVES D'ORIENT",
      imageUrls: ["https://activetravel.com.tn/public/images/image/voyage-organise-iran1_0.93235400-1705746624.jpg"],
      description: (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '-20px', marginRight: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SiGooglemaps className="mr-1" /> <span> IRAN </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BsMoonStarsFill className="mr-1" /> <span> 13 jours/</span>
          <br />
        </div>
        <p>120nuits </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AiOutlineCheck className="mr-1" /> <span>Avec Visa</span>
        </div>
        <br />
        <span style={{ marginLeft: '3px',fontWeight: 'bold'}}>Nos Départs</span><br />
        <hr />
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0px' }}>
          <FaCalendarAlt className="mr-1" /><span style={{ color: 'black' }}>Du </span>
        </div>
        <p style={{ fontWeight: 'bold', color :'#1c2e4a' }}>05/05/2024 <br /></p> Au <p style={{ fontWeight: 'bold', color :'#1c2e4a'}}>17/05/2024 </p>
      </div>
      
      
      ),
      pricePerNight:7200,
      departureDates: [
        {
          startDate: "05/05/2024",
          endDate: "17/05/2024",
        },
        
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Latest Destinations</h2>
      <p>Most recent destinations added by our hosts</p>
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {topRowHotels.map((hotel, index) => (
            <LatestDestinationCard key={index} hotel={hotel} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Additional hotels */}
          {additionalHotels.map((hotel, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
          <div style={{ position: 'relative' }}>
            <img src={hotel.imageUrls[0]} alt={hotel.name} className="w-full h-96 object-cover rounded-none mb-2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', backgroundColor: '#ffffffaa', padding: '8px' }}>
              <h1 style={{ color: 'white', fontSize: '15px', fontFamily: 'revue', fontWeight: 'bold', marginLeft :'40px' }}>{hotel.name}</h1>
            </div>
          </div>
         <hr className="my-2" />
              <div className="flex">
                <div style={{ flex: 1 }}>
                  <p className="text-sm text-gray-600 mb-2 ml-2 text-black">{hotel.description}</p>
                </div>
                <div className="flex flex-col justify-between ml-4">
                  <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '80px', marginRight: '10px' }}>
                    <div>
                      <span>À partir de <br /></span>
                      <div className="text-xl text-blue-700 font-bold mb-2 ml-2 text-black">
                        <span style={{ color :'#1c2e4a',fontSize: '1em', fontWeight: 'bold', marginLeft: '-15px' }}>{hotel.pricePerNight}TND</span>
                      </div>
                      <span>/pers<br></br> Détails programme & Date</span>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                   <button className="bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out" style={{ borderRadius: '40px' }}>Découvrir</button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );  
};
export default Home;

