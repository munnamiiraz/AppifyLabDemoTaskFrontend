import  { useState } from 'react';
import { Link } from 'react-router-dom';

import "../../../assets/css/bootstrap.min.css"
import "../../../assets/css/common.css"
import "../../../assets/css/main.css"
import "../../../assets/css/responsive.css"

import Logo from "../../assets/images/logo.svg"
export default function Navbar() {
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifyTab, setNotifyTab] = useState<'all' | 'unread'>('all');

  const notifications = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      text: 'posted a link in your timeline.',
      name: 'Steve Jobs',
      time: '42 minutes ago'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      text: 'changed the name of the group',
      name: 'Freelancer usa',
      time: '42 minutes ago'
    }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 py-1.5">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="" />
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 bg-gray-100 rounded">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-3 flex-1 ml-4">
            {/* Search Form */}
            <form className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1.5 max-w-md flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
								<circle cx="7" cy="7" r="6" stroke="#666"/>
								<path stroke="#666" strokeLinecap="round" d="M16 16l-3-3"/>
							</svg>
              <input
                type="search"
                placeholder="input search text"
                className="bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 w-full text-sm"
              />
            </form>

            {/* Nav Icons */}
            <ul className="flex items-center gap-1 ml-auto mr-1">
              {/* Home */}
              <li>
                <Link to="/feed.html" className="block p-2 border-b-2 border-blue-500 text-blue-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7A1 1 0 003 13h1v7a1 1 0 001 1h12a1 1 0 001-1v-7h1a1 1 0 00.707-1.707l-7-7z" />
                  </svg>
                </Link>
              </li>

              {/* Friends */}
              <li>
                <Link to="/friend-request.html" className="block p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12a3 3 0 100-6 3 3 0 000 6zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </Link>
              </li>

              {/* Notifications */}
              <li className="relative">
                <button
                  onClick={() => setNotifyOpen(!notifyOpen)}
                  className="relative block p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15 17h-2v2h2v-2zm4-8c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 5.25-2 6-2 6h16s-2-.75-2-6zm-2.5 9h-9v2h9v-2z" />
                  </svg>
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    6
                  </span>
                </button>

                {/* Notifications Dropdown */}
                {notifyOpen && (
                  <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                      <h4 className="font-semibold text-gray-800">Notifications</h4>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="2" />
                          <circle cx="19" cy="12" r="2" />
                          <circle cx="5" cy="12" r="2" />
                        </svg>
                      </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-2 p-4 border-b">
                      <button
                        onClick={() => setNotifyTab('all')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          notifyTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setNotifyTab('unread')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          notifyTab === 'unread' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Unread
                      </button>
                    </div>

                    {/* Notifications List */}
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div key={notif.id} className="flex gap-3 p-4 hover:bg-gray-50 cursor-pointer border-b">
                          <img
                            src={notif.image}
                            alt={notif.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <p className="text-sm text-gray-800">
                              <span className="font-semibold text-blue-600">{notif.name}</span> {notif.text}
                            </p>
                            <span className="text-xs text-gray-500 mt-1">{notif.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {/* Messages */}
              <li>
                <Link to="/chat.html" className="relative block p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                  </svg>
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    2
                  </span>
                </Link>
              </li>
            </ul>

            {/* Profile Dropdown */}
            <div className="relative">
              <div
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
                  alt="Dylan Field"
                  className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-gray-800 font-medium text-sm">Dylan Field</span>
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </div>
              </div>

              {/* Profile Dropdown Menu */}
              {profileOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  {/* Profile Info */}
                  <div className="flex items-center gap-3 p-4 border-b">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                      alt="Dylan Field"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">Dylan Field</h4>
                      <Link to="/profile.html" className="text-sm text-blue-500 hover:underline">
                        View Profile
                      </Link>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <ul className="py-2">
                    <li>
                      <Link
                        to="#"
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l1.72-1.35c.15-.12.19-.34.1-.51l-1.63-2.83c-.12-.22-.37-.29-.59-.22l-2.03.8c-.42-.32-.9-.6-1.42-.82l-.31-2.15c-.04-.24-.24-.41-.48-.41h-3.26c-.24 0-.43.17-.48.41l-.31 2.15c-.52.22-1 .5-1.42.82l-2.03-.8c-.22-.09-.47 0-.59.22L2.74 8.87c-.12.22-.07.44.1.51l1.72 1.35c-.05.3-.07.62-.07.94 0 .33.02.64.07.94l-1.72 1.35c-.15.12-.19.34-.1.51l1.63 2.83c.12.22.37.29.59.22l2.03-.8c.42.32.9.6 1.42.82l.31 2.15c.04.24.24.41.48.41h3.26c.24 0 .43-.17.48-.41l.31-2.15c.52-.22 1-.5 1.42-.82l2.03.8c.22.09.47 0 .59-.22l1.63-2.83c.12-.22.07-.44-.1-.51l-1.72-1.35zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                          </svg>
                          <span className="text-sm text-gray-700">Settings</span>
                        </div>
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 6l6 6-6 6" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                          </svg>
                          <span className="text-sm text-gray-700">Help & Support</span>
                        </div>
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 6l6 6-6 6" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
                          </svg>
                          <span className="text-sm text-gray-700">Log Out</span>
                        </div>
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 6l6 6-6 6" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}