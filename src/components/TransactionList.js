import React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';
import moment from 'moment';

const TransactionItem = ({
  orderCode,
  orderStatus,
  orderTotal,
  estArrivalDate,
  transactionItemData,
}) => (
  <View style={styles.item}>
    <Text>Kode Pesanan: {orderCode}</Text>
    <Text>Status Pesanan: {orderStatus}</Text>
    <Text>Total Pesanan: {orderTotal}</Text>
    <Text>Akan tiba: {moment(estArrivalDate).format('DD MMM YYYY')}</Text>
    {transactionItemData.map((data) => (
      <View>
        <Text key={data.toString()}>Nama produk: {data.sku.product.nama}</Text>
      </View>
    ))}
  </View>
);

const TransactionList = ({data}) => {
  const renderItem = ({item}) => (
    <TransactionItem
      orderCode={item.order_code}
      orderStatus={item.status}
      orderTotal={item.sub_total}
      estArrivalDate={item.estimated_arrival_date}
      transactionItemData={item.transaction_item}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
    marginTop: 20,
    borderWidth: 0.5,
    borderColor: 'black',
    paddingLeft: 10,
  },
});

export default TransactionList;
