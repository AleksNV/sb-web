import React from 'react';

export default function BankingPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
              <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
            </div>
            <span className="text-sm font-medium">Оплатить</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
              <div className="text-white text-xl font-bold">+</div>
            </div>
            <span className="text-sm font-medium">Пополнить</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
              <div className="text-white text-xl">→</div>
            </div>
            <span className="text-sm font-medium">Перевести</span>
          </div>
        </div>
      </div>

      {/* Account Overview */}
      <div className="flex gap-4 mb-4">
        {/* Account Operations */}
        <div className="bg-white rounded-2xl p-4 flex-1 shadow-sm">
          <h3 className="text-sm font-medium text-gray-900 mb-1">Операции по счету</h3>
          <p className="text-xs text-gray-500 mb-2">Трат в августе</p>
          <p className="text-lg font-bold text-gray-900 mb-2">355 ₽</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        {/* Cashback */}
        <div className="bg-white rounded-2xl p-4 flex-1 shadow-sm">
          <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-flex items-center">
            <span className="mr-1">👑</span>
            285 ₽
          </div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">Накоплено кэшбэка</h3>
          <p className="text-xs text-gray-500 mb-1">Зачислится</p>
          <p className="text-xs text-gray-900">21 августа</p>
        </div>
      </div>

      {/* Black Bonuses */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">Бонусы по Black</h2>
          <a href="#" className="text-blue-500 text-sm">Все</a>
        </div>
        
        <div className="flex gap-3">
          {/* Refer-a-Friend */}
          <div className="bg-white border border-gray-200 rounded-xl p-3 flex-1 text-center">
            <p className="text-sm font-medium text-gray-900">От 500 ₽</p>
            <p className="text-xs text-gray-600">за каждого</p>
            <p className="text-xs text-gray-600 mb-2">друга</p>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-sm">👥</span>
            </div>
          </div>

          {/* Increased Cashback */}
          <div className="bg-white border border-gray-200 rounded-xl p-3 flex-1 text-center">
            <p className="text-sm font-medium text-gray-900">Повышенный</p>
            <p className="text-xs text-gray-600">кэшбэк</p>
            <p className="text-xs text-gray-600 mb-2">в августе</p>
            <div className="flex justify-center space-x-1">
              <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🛍️</span>
              </div>
              <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🏢</span>
              </div>
              <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🏥</span>
              </div>
              <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">❤️</span>
              </div>
            </div>
          </div>

          {/* Third Bonus */}
          <div className="bg-white border border-gray-200 rounded-xl p-3 flex-1 text-center">
            <p className="text-sm font-medium text-gray-900">Кэшбэк</p>
            <p className="text-xs text-gray-600">до 15%</p>
            <p className="text-xs text-gray-600 mb-2">за покупки</p>
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-sm">✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 