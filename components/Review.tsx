/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { FiChevronsDown } from "react-icons/fi";
export default function Review() {
  const [hidden, setHidden] = useState(true);
  return (
    <section className="pt-20 container " id="review">
      <h1 className="text-white text-[30px] text-center px-14 pt-5 ">
        Giới thiệu về <br /> Đình Thần Thái Bình
      </h1>
      <div
        className={`"  space-y-4 text-white text-justify text-[13px] overflow-hidden  relative w-full" ${
          hidden ? "h-[350px]" : "h-auto"
        }`}
      >
        <div
          className={`" absolute bottom-0 right-[50%]  items-center justify-center translate-x-[50%] h-[150px] backdrop-blur-  w-full bg-gradient-to-t from-stone-900 rounded-b-2xl" ${
            !hidden ? "hidden" : "flex"
          }`}
        >
          <div
            className="font-semibold text-[20px] mt-20 text-[#E2D398] flex items-center justify-center gap-2"
            onClick={() => setHidden(false)}
          >
            Đọc thêm
            <FiChevronsDown />
          </div>
        </div>
        <p className="">
          Đình Thái Bình tọa lạc tại khu phố Thái Bình 1, phường Long Bình,
          thành phố Thủ Đức, Thành phố Hồ Chí Minh, trước đây có tên là đình
          Vĩnh Thuận, được xây dựng vào khoảng thế kỷ XIX tại gò đình thuộc làng
          Vĩnh Thuận, tổng Long Vĩnh, huyện Long Thành, phủ Phước Long, tỉnh
          Biên Hòa.
        </p>
        <p>
          Tuy nhiên, do biến cố của chiến tranh, do nhiều biến động của quá
          trình tách nhập địa giới hành chính, đình được dân làng trùng tu, sửa
          chữa và đổi tên đình. Đình được xây dựng nhằm phục vụ nhu cầu tâm
          linh, tín ngưỡng, thờ thần làng, tưởng nhớ các bậc tiền hiền, hậu hiền
          những người có công khai phá vùng đất mới, là chỗ dựa về tinh thần, là
          nơi bái lễ cầu nguyện, cầu mùa, cầu quốc thái dân an.
        </p>
        <p>
          Trong quá trình tồn tại, đình Thái Bình đã ghi lại nhiều dấu ấn lịch
          sử về giai đoạn kháng chiến chống thực dân Pháp và đế quốc Mỹ xâm lược
          (1945 - 1975) của quân và dân Sài Gòn - Gia Định, nay là Thành phố Hồ
          Chí Minh.
        </p>
        <p>
          Đình Thái Bình hiện nay do Ban Quý tế đình quản lý, mặc dù trải qua
          nhiều lần trùng tu sửa chữa, nhưng đình vẫn giữ được nét đẹp của ngôi
          đình làng Nam Bộ.
        </p>
        <p>
          Đình Thái Bình trước đây có tên là đình Vĩnh Thuận, được xây dựng vào
          khoảng thế kỷ XIX tại gò đình thuộc làng Vĩnh Thuận, Tổng Long Vĩnh,
          huyện Long Thành, phủ Phước Long, tỉnh Biên Hòa. Trong giai đoạn kháng
          chiến chống thực dân Pháp và đế quốc Mỹ, đình Thái Bình là cơ sở cách
          mạng, nơi trú ẩn của các cán bộ, chiến sĩ. Đình Thái Bình hiện nay do
          Ban Quý tế đình quản lý, mặc dù trải qua nhiều lần trùng tu sửa chữa,
          nhưng đình vẫn giữ được nét đẹp của ngôi đình làng Nam Bộ.
        </p>
        <p>
          Đình Thái Bình đã được UBND TPHCM xếp hạng di tích lịch sử cấp TP theo
          Quyết định số 4256/QĐ-UBND ngày 19/11/2020 của UBND TPHCM về xếp hạng
          di tích lịch sử văn hóa, danh lam thắng cảnh TP, di tích đình Thái
          Bình sẽ được bảo vệ theo Luật Di Sản Văn hóa.
        </p>
      </div>
    </section>
  );
}
