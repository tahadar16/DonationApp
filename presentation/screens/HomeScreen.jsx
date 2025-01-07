import React, { useState, useEffect } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import globalStyle from "../globalstyle";
import Title from "../components/common/Title";
import SearchBar from "../components/search/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../Colors";
import Tab from "../components/common/Tab";
import { updateSelectedCategoryId } from "../../redux/reducers/CategoriesSlice";
import DonationItem from "../components/donation/DonationItem";
import { Route } from "../../navigation/Routes";
import SafeScreen from "../components/common/SafeScreen";
import { updateSelectedDonationItemId } from "../../redux/reducers/DonationsSlice";
import { resetToInitialState } from "../../redux/reducers/UserSlice";
import { logOut } from "../data/api/user";

const HomeScreen = ({navigation})=> {

    const user = useSelector( state => state.user)
    const categories = useSelector(state => state.categories)
    const donations = useSelector(state => state.donations)
    const dispatch = useDispatch()

    const [categoryPage, setCategoryPage] = useState(1);
    const [categoryList, setCategoryList] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const [donationItemList, setDonationItemList] = useState([]);
    const categoryPageSize = 4;

    useEffect(()=> {
        const filteredList = donations.donations.filter((value)=> value.categoryIds.includes(categories.selectedCategoryId))
        setDonationItemList(filteredList)
    }, [categories.selectedCategoryId])

    useEffect(() => {
        setIsLoadingCategories(true);
        setCategoryList(
          pagination(categories.categories, categoryPage, categoryPageSize),
        );
        setCategoryPage(prev => prev + 1);
        setIsLoadingCategories(false);
      }, []);

    const pagination = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        if (startIndex >= items.length) {
          return [];
        }
        return items.slice(startIndex, endIndex);
      };

    return (
        <SafeScreen style={globalStyle.lightfullScreen}>
                <FlatList
					ListHeaderComponent={
						<View>
							<View style = {style.header}>
								<View>
									<Text style= {style.hello}>Hello,</Text>
									<Title title={user.displayName + "👋"}/>
								</View>
								<View>
									<Image height={50} width={50}
									source={{uri: user.profileImage}}/>
									<Pressable
									onPress={async () => {
										dispatch(resetToInitialState());
										await logOut();
									}}>
									<Title title={'Logout'} titleStyle={{fontSize: 16, color: "#156CF7"}} />
									</Pressable>
							</View>
							</View>
							<SearchBar placeholder={"Search"} onSearch= {()=> {}}/>
							<Pressable onPress={()=> {}}>
								<Image style= {style.highlightedImage}
								source={require("../../assets/images/highlighted_image.png")}  />
							</Pressable>
							<View>
								<Title title={"Select Category"} titleStyle={{fontSize: 18, marginBottom: 16}}/>
								<FlatList
									onEndReachedThreshold={0.5}
									onEndReached={() => {
										if (isLoadingCategories) {
										return;
										}
										setIsLoadingCategories(true);
										let newData = pagination(
										categories.categories,
										categoryPage,
										categoryPageSize,
										);
										if (newData.length > 0) {
										setCategoryList(prevState => [...prevState, ...newData]);
										setCategoryPage(prevState => prevState + 1);
										}
										setIsLoadingCategories(false);
									}}

									horizontal={true}
									showsHorizontalScrollIndicator= {false}
									data={categoryList}
									renderItem={({item})=> {
										return <Tab
													tabId = {item.categoryId}
													ctaText = {item.name}
													ctaAction = {(id) => {
														dispatch(updateSelectedCategoryId({selectedCategoryId : id}))}
													}
													selected = { item.categoryId === categories.selectedCategoryId}/>
												}}/>
							</View>
						</View>
					}
						data={donationItemList}
						renderItem={({item}) => {
							return <Pressable
										onPress={()=> {
											dispatch(updateSelectedDonationItemId({selectedDonationItemId: item.id}))
											navigation.navigate(
												Route.Description,
												{ donationItem: item, tag: getTag() }
														)
												}
										}>
										<DonationItem
											imageUrl = {item.image}
											title= {item.name}
											price = {item.price}
											tag= {getTag()}
											/>
									</Pressable>
						}
					}
						keyExtractor={(item) => item.donationItemId}
						numColumns={2}
						columnWrapperStyle = { donationItemList.length > 1 ? style.columnWrapper : style.singleItemColumnWrapper}
						showsVerticalScrollIndicator = {false}
					/>
			</SafeScreen>
    )

    function getTag() {
       const filteredCategory =  categories.categories.filter(categoryItem => categoryItem.categoryId === categories.selectedCategoryId)
       return filteredCategory[0].name
    }
}

const style = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20
    },
    hello: {
        color: Colors.DimGrey,
        fontFamily: "inter-regular",
        fontSize: 16
    },
    highlightedImage: {
        height: 190,
        width: "100%",
        marginVertical: 20,
        resizeMode: "contain"
    },
    columnWrapper: {
        justifyContent: "space-around",
    },
	singleItemColumnWrapper: {
		alignSelf: "flex-start"
	}
})

export default HomeScreen;