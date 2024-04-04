import { Details } from "@/typings";
import { baseURL } from "@/utils/baseUrl";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import Container from "./Container";

type Props = {
  movieDetails: Details;
};

function Seasons({ movieDetails }: Props) {
  const router = useRouter();
  const { data: session } = useSession();

  const navigatePage = (sessionId: number, seasonNumber: number) => {
    if (session) {
      router.push(`/season/${sessionId}?seasonNumber=${seasonNumber}`);
    } else {
      toast.error("You need to sign in to look up more information about this season.");
    }
  };

  return (
    <div className="px-4 pb-8">
      <Container header="Seasons">
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide py-2">
          {movieDetails?.seasons?.map((season, index) => (
            <motion.div
              key={season.id || index} // Fallback to index if id is not available
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="shrink-0 relative cursor-pointer w-[180px] md:w-[200px] h-[250px] md:h-[300px] hover:scale-105"
              onClick={() => navigatePage(movieDetails.id, season.season_number)}
            >
              {season.poster_path ? (
                <img
                  src={`${baseURL}${season.poster_path}`}
                  alt={season.name}
                  className="rounded-lg object-cover w-full h-full"
                />
              ) : (
                <img
                  src="https://i0.wp.com/authormarystone.com/wp-content/uploads/2019/01/comingsoon.jpg?resize=576%2C864"
                  alt="Coming soon"
                  className="rounded-lg object-cover w-full h-full"
                />
              )}
              <div className="absolute bottom-0 left-0 w-full text-center bg-gradient-to-t from-black to-transparent py-2">
                <p className="text-xs text-white truncate">{season.name}</p>
                <p className="text-xs text-gray-400">Season: {season.season_number}</p>
                <p className="text-xs text-gray-400">Episodes: {season.episode_count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Seasons;
