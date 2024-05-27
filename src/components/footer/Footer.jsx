import {
  faDiscord,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">C07</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Nội quy diễn đàn
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Thỏa thuận sử dụng dịch vụ
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Góp ý
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Hỗ trợ, hướng dẫn
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Liên hệ quảng cáo
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  C07 RSS
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Cộng đồng</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Điện thoại
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Máy tính
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Camera
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Xe
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Khoa học công nghệ
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Nhật Tảo</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Mua bán điện thoại
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Mua bán máy tính
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Mua bán camera
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Mua bán đồng hồ thông minh
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Theo dõi chúng tôi
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 border-2 border-gray-400 rounded-full text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 border-2 border-gray-400 rounded-full text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 ml-2"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 border-2 border-gray-400 rounded-full text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 ml-2"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="container mx-auto px-4">
        <div className="text-center py-4">
          <p className="text-gray-700 text-sm">
            &copy; 2024 Codegym C07 Blog Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
