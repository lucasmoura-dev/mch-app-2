import React, { PureComponent } from 'react';

import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Container,
  HeaderContent,
  HeaderColumn,
  HeaderText,
  ColumnContainer,
  RowContent,
  Column,
  TableText,
} from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

interface HeaderDataInterface {
  id: string,
  text: string,
  width: number,
  sort?: string,
};

interface HeaderPropsInterface {
  headerData: HeaderDataInterface[],
  onPressHeader?: (colData: HeaderDataInterface, direction: string) => any
}


class Header extends PureComponent<HeaderPropsInterface, any> {
  private orderBy : { columnId: string | null, direction: string };


  constructor(props: HeaderPropsInterface) {
    super(props);
    this.orderBy = { columnId: null, direction: 'asc' };
    props.headerData.find(({ id, sort }) => {
      if (sort) {
        this.orderBy.columnId = id;
        this.orderBy.direction = sort;
      }
    });
  }

  onPress(colData: HeaderDataInterface) {
    if (this.orderBy.columnId !== colData.id) {
      this.orderBy.columnId = colData.id;
      this.orderBy.direction = 'asc';
    } else {
      this.orderBy.direction =
        this.orderBy.direction === 'asc' ? 'desc' : 'asc';
    }

    if (this.props.onPressHeader) {
      this.props.onPressHeader(colData, this.orderBy.direction);
    }
  }

  render() {
    if (!this.props.headerData) {
      return <HeaderContent />;
    }

    this.props.headerData.forEach(col => {
      col.width = col.width || 120;
    });

    return (
      <HeaderContent>
        {this.props.headerData.map((col, index) => {
          return (
            <ColumnContainer
              key={String(index)}
              onPress={() => this.onPress(col)}
            >
              <HeaderColumn width={col.width}>
                <HeaderText>{col.text}</HeaderText>
                {col.id === this.orderBy.columnId && (
                  <MaterialCommunityIcons
                    name={
                      this.orderBy.direction === 'asc'
                        ? 'arrow-down'
                        : 'arrow-up'
                    }
                    size={20}
                    color="#0D134E"
                  />
                )}
              </HeaderColumn>
            </ColumnContainer>
          );
        })}
      </HeaderContent>
    );
  }
}

type RowColumnProps = {
  colIndex: number | string,
  width?: number,
  colData: any
}

class RowColumn extends PureComponent<RowColumnProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Column key={'col' + this.props.colIndex} width={this.props.width}>
        <TableText numberOfLines={1}>{this.props.colData}</TableText>
      </Column>
    );
  }
}

type RowProps = {
  headerData: [HeaderDataInterface],
  rowData: [object],
  rowIndex: number,
}

class Row extends PureComponent<RowProps, any> {
  headerData = this.props.headerData;

  columns = this.props.rowData.map((colData, colIndex) => {
    return (
      <RowColumn
        key={'col' + colIndex}
        width={this.props.headerData[colIndex].width}
        colData={colData}
        colIndex={colIndex}
      />
    );
  });

  render() {
    return (
      <RowContent
        isAlternativeColor={this.props.rowIndex % 2 !== 0}
        isSelected={this.props.rowIndex === 3}
      >
        {this.columns}
      </RowContent>
    );
  }
}

type DataTableProps = {
  headerData: [HeaderDataInterface],
  data: [any],
  onEndReached: () => any,
  onEndReachedThreshold: number,
  onPressHeader: (columnData: HeaderDataInterface, direction: string) => any
  renderFooter?: any,
}

const DataTable = ({
  headerData,
  data,
  onEndReached,
  onEndReachedThreshold,
  onPressHeader,
  renderFooter,
}: DataTableProps) => {
  data = data || [];

  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          <Header headerData={headerData} onPressHeader={onPressHeader} />
          <FlatList
            data={data}
            keyExtractor={(rowData, index) => String(index)}
            onEndReached={onEndReached}
            onEndReachedThreshold={onEndReachedThreshold || 0.7}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 50 }}
            ListFooterComponent={renderFooter}
            renderItem={({ item: rowData, index }) => (
              <Row headerData={headerData} rowData={rowData} rowIndex={index} />
            )}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default DataTable;
