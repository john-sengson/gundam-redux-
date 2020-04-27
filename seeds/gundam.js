
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('gundam').del()
    .then(function () {
      // Inserts seed entries
      return knex('gundam').insert([
        { id: 1, unit: "RX-78-2", grade: "Real Grade", scale: "1/144", price: "$39.99", picture: "https://www.gundam.co.nz/wp-content/uploads/2020/02/HG-RX-78-2-GUNDAM-BEYOND-GLOBAL-6-100x100.jpg" },
        {
          id: 2, unit: "Lunamaria's Gunner Zaku Warrior", grade: "Master Grade", scale: "1/144", price: "$82.00", picture: "https://www.gundam.co.nz/wp-content/uploads/2019/08/mg-lunamarias-zaku-warrior-2-100x100.jpg"
        },
        { id: 3, unit: "Build Strike Gundam Full Package", grade: "Master Grade", scale: "1/100", price: "$110.00", picture: "https://www.gundam.co.nz/wp-content/uploads/2014/01/85-MG-Build-Strike-Gundam-Full-Package-100x100.jpg" },
        { id: 4, unit: "Unicorn Gundam", grade: " Perfect Grade", scale: "1/60", price: "$449.00", picture: "https://www.gundam.co.nz/wp-content/uploads/2016/04/222-PG-RX-0-Unicorn-Gundam-100x100.jpg" },
        { id: 5, unit: "Build Strike galaxy Cosmos", grade: "High Grade", scale: "1/144", price: "$49.00", picture: "https://www.gundam.co.nz/wp-content/uploads/2018/03/hgbf-build-strike-galaxy-cosmos-1-1-100x100.jpg" },
        { id: 6, unit: "Wing Gundam EW 20", grade: "Real Grade", scale: "1/144", price: "$59.99", picture: "https://www.gundam.co.nz/wp-content/uploads/2016/04/522-RG-Wing-Gundam-EW-100x100.jpg" },
        { id: 7, unit: "Sinanju", grade: "Master grade", scale: "1/100", price: "$139.99", picture: "https://www.gundam.co.nz/wp-content/uploads/2016/04/02-MG-Sinanju-100x100.jpg" },
        { id: 8, unit: "Petit'gguy Winning Yellow", grade: "high Grade", scale: "1/144", price: "$19.99", picture: "https://www.gundam.co.nz/wp-content/uploads/2016/09/51lS-avqAIL._SL1200_-100x100.jpg" },
        { id: 9, unit: "RX-Zeromaru", grade: "SD", scale: "SD", price: "$29.99", picture: "https://www.gundam.co.nz/wp-content/uploads/2018/09/sdbd-rx-zero-maru-1-1-100x100.jpg" },
        { id: 9, unit: "00 Raiser Gundam", grade: "Perfect Grade", scale: "1/60", price: "$399.00", picture: "https://www.gundam.co.nz/wp-content/uploads/2016/04/03-Perfect-Grade-00-Raiser-100x100.jpg" },
        { id: 10, unit: "Shin Musha Gundam", grade: "Master Grade", scale: "1/100", price: "$120.00", picture: "https://www.gundam.co.nz/wp-content/uploads/2016/06/spd_20090318202851_b-100x100.jpg" },
        { id: 11, unit: "Gundam Barbatos Lupus Rex", grade: "Real Grade", scale: "1/100", price: "$95.99", picture: "https://www.gundam.co.nz/wp-content/uploads/2017/01/100-full-mechanics-gundam-barbatos-lupus-rex-1-1-100x100.jpg" },
        { id: 12, unit: "Tallgeese", grade: "Real Grade", scale: "1/100", price: "$69.00", picture: "https://www.gundam.co.nz/wp-content/uploads/2016/04/42-OZ-00MS-Tallgeese-EW-100x100.jpg" },
        { id: 13, unit: "Lunagazer Gundam", grade: "High Grade", scale: "1/144", price: "$49.99", picture: "https://www.gundam.co.nz/wp-content/uploads/2017/01/bann14477_2_1484028874-100x100.jpg" },
        { id: 14, unit: "Gundam Bael", grade: "High Grade", scale: "1/144", price: "$39.99", picture: "https://www.gundam.co.nz/wp-content/uploads/2017/02/hg-gundam-bael-1-100x100.jpg" },
        { id: 15, unit: "God Gundam", grade: "High Resolution", scale: "1/100", price: "$249.99", picture: "https://www.gundam.co.nz/wp-content/uploads/2019/07/bans58206_1-100x100.jpg" },

      ]);
    });
};
