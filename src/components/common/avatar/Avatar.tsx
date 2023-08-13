import { FC } from "react";
import noAvatar from "./../../../../src/assets/pngtree-gray-silhouette-avatar-png-image_3418406.jpg";
type AvatarType = {
    img?: string;
};

const Avatar: FC<AvatarType> = ({ img }) => {
    return (
        <div className=" w-[40px] h-[40px] block rounded-full overflow-hidden">
            <img
                src={img || noAvatar}
                className="w-full h-full object-cover"
                alt="avatar"
            />
        </div>
    );
};

export default Avatar;
