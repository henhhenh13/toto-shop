import React from 'react';

function NavLinkTop(props) {
    return (
        <div className="w-full h-[70px] bg-zinc-100 pl-10">
            <ul className="flex items-center h-full uppercase text-sm text-gray-600">
                <li><a href="/" className="after-nav hover:nav-link-hover">trang chủ</a></li>
                <li><a href="/" className="after-nav hover:nav-link-hover">sản phẩm</a></li>
                <li><a href="/" className="after-nav hover:nav-link-hover">đồ nữ</a></li>
                <li><a href="/" className="after-nav hover:nav-link-hover">áo thun</a></li>
                <li><a href="/" className="hover:nav-link-hover">áo thun tay ngắn</a></li>
            </ul>
        </div>
    );
}

export default NavLinkTop;