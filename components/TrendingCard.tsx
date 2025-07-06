import MaskedView from '@react-native-masked-view/masked-view';
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";


const TrendingCard = ({
  movie: { movie_id, title, poster_url },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/movie/${movie_id}`} asChild>
      <TouchableOpacity className="w-32 relative pl-5">
        <Image
          source={{ uri: poster_url }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />

        <Text
          className="text-sm font-bold mt-2 text-light-200"
          numberOfLines={2}
        >
          {title}
        </Text>
        <MaskedView
            maskElement={
                <Text className='font-bold text-white text-6xl'>{index + 1}</Text>    
            }
        ></MaskedView>
        
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;