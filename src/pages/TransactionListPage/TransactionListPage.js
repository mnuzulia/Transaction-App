import {useFocusEffect} from '@react-navigation/native';
import moment from 'moment';
import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import TransactionList from '../../components/TransactionList';
import useAxios from '../../service';

function TransactionListPage() {
  const [transactionData, setTransactionData] = useState([]);
  const [{data}] = useAxios('/transactions/all/processed');

  useEffect(() => {
    if (data) {
      const {transactions} = data.data;
      setTransactionData(transactions);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Text>List Transaction</Text>
      <TransactionList data={transactionData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 50,
    marginRight: 20,
  },
});

export default TransactionListPage;
