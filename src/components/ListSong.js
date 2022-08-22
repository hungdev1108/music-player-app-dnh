import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

function ListSong() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);

  const handlePlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  };

  useEffect(() => {
    setIdSong(song.id);
    return () => {};
  }, [song]);

  return (
    <div className="col-span-2 overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="">
          {DataSongs.map((song, index) => (
            <tr
              onClick={() => handlePlaySong(song.id)}
              key={index}
              className={`bg-slate-800 h-12 text-gray-400 hover:bg-slate-900 cursor-pointer
              ${idSong === song.id && "text-cyan-400 bg-slate-900"}`}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url} className="hover:text-white">
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSong;
