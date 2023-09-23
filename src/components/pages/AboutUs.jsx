import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useTitle from "../Hooks/useTitle";

const AboutUs = () => {
  useTitle("About Us")
  // Example data
  const founder = {
    name: "John Doe",
    title: "Founder & Chef",
    bio: "John Doe, our founder and CEO, is a passionate chef and visionary entrepreneur. With a deep love for Bangladeshi cuisine, he founded our platform to share its rich flavors globally. His culinary expertise and commitment to authenticity drive our mission. John's innovative approach and creative flair have made us a go-to destination for Bangladeshi recipes. Under his leadership, we connect food enthusiasts worldwide to the heart of Bangladesh's culinary traditions.",
    imageUrl: "https://i.ibb.co/1Gvd2xB/chef-2.jpg", // Replace with the actual image path
  };

  const mission =
    "Our mission is to share the rich and diverse flavors of Bangladeshi cuisine with the world. We believe that food is a universal language that brings people together, and we";

  return (
    <>
      <Navbar></Navbar>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-semibold mb-4">About Us</h2>
              <p className="text-gray-700">{mission}</p>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <img
                  src={founder.imageUrl}
                  alt={founder.name}
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{founder.name}</h3>
                  <p className="text-gray-600">{founder.title}</p>
                </div>
              </div>
              <p className="text-gray-700">{founder.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="map my-10">
        <h1 className="text-3xl font-semibold text-center my-3">Our Location</h1>
        <MapContainer
          center={[	23.4512884, 91.1793489]}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[500px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[	23.4512884, 91.1793489]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
