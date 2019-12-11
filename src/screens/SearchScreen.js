import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () =>{
    const [term, setTerm] = useState('')
    
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(
            result => {
                return result.price === price
            }
        )
    }

    return (
        <>
            <SearchBar onTermSubmit={() => searchApi({term})} term={term} onTermChange={newTerm => setTerm(newTerm)}/>
             {errorMessage ? <Text>{errorMessage}</Text> : null}
             <ScrollView showsVerticalScrollIndicator={false}>
                <ResultsList results = {filterResultsByPrice('$')} title = "Cost Effective"/>
                <ResultsList results = {filterResultsByPrice('$$')} title = "Bit Pricier"/>
                <ResultsList results = {filterResultsByPrice('$$$')} title = "Big Spender"/>
             </ScrollView>
        </>
    )
    
}

const styles = StyleSheet.create({})

export default SearchScreen