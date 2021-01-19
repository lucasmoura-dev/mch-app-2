import React, { useState, useEffect } from 'react';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import { DateTime, Settings } from 'luxon';

import api from '../../services/api';
import locale from '../../services/locale';
import colors from '../../styles/colors';

import { ToastAndroid, View, StatusBar } from 'react-native';

import DataTable from '../../components/DataTable';
import StatusIcon from '../../components/StatusIcon';
import FloatButton from '../../components/FloatButton';
import SearchInput from '../../components/SearchInput';
import ScrollableModal from '../../components/ScrollableModal';

import { DrawerScreenProps } from '@react-navigation/drawer';

type RootStackParamList = {
  Home: undefined,
  Plants: { searchParams: { brand?: string, city?: string, online?: number | boolean } } | undefined,
};

type ScreenProps = DrawerScreenProps<RootStackParamList, 'Plants'>;

import { Divider, RadioButton, Searchbar } from 'react-native-paper';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {
  Container,
  ButtonApplyFilters,
  ButtonText,
  FiltersContainer,
  FilterHeaderContent,
  ModalHeader,
  FiltersReset,
  FilterType,
  FilterTypeLabel,
  ModalFooter,
  RadioButtonContent,
  RadioButtonLabel,
  ButtonResetFilters,
  ButtonTextReset,
} from './styles';

const Plants: React.FC<ScreenProps> = ({ route, navigation }) => {
  Settings.defaultLocale = 'pt';

  interface ISearchParams {
    page?: number;
    sort?: string;
    limit?: number;
    brand?: string;
    name?: string;
    city?: string;
    online?: boolean | number | null;
  }

  const [searchParams, setSearchParams] = useState<ISearchParams>({
    page: 1,
    sort: 'name:asc',
    limit: 15,
    brand: '',
    name: '',
    city: '',
    online: null,
    ...route.params.searchParams
  });

  const [plants, setPlants] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [totalPlants, setTotalPLants] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const headerData = [
    { id: 'name', text: 'Nome', width: 160, sort: 'asc' },
    { id: 'online', text: 'Status', width: 80 },
    { id: 'generation_today', text: 'Hoje', width: 100 },
    { id: 'power_current', text: 'Potência atual', width: 120 },
    { id: 'generation_total', text: 'Total', width: 120 },
    { id: 'power_total', text: 'Capacidade', width: 140 },
    { id: 'inverter_brand', text: 'Marca', width: 100 },
    { id: 'elapsedTime', text: 'Atualização', width: 100 },
  ];

  /*useFocusEffect(
    React.useCallback(() => {
      loadPlants();
    }, []),
  );*/

  // Hook: atualizou os filtros
  /*useEffect(() => {
    if (route.params?.searchParams) {
      console.log('Filtro atualizado!');
      console.log(route.params.searchParams);
      setSearchParams({ ...route.params.searchParams,  page: 1 });
      loadPlants(true);
    }
  }, [route.params?.searchParams]);*/

  useEffect(() => {
    if (searchParams.page === 1) {
      console.log('teste');
      loadPlants(true);
    }
  }, [searchParams.page]);

  type PlantDataInterface = {
    name: string;
    powerEfficiency?: number;
    power_current: number;
    power_total: number;
    updated_at: string;
    online: number | boolean;
    generation_today: number;
    generation_total: number;
    inverter_brand: string;
  };

  function onPressTableHeader(columnData, currentOrderDir) {
    const sort = `${columnData.id}:${currentOrderDir}`;
    setSearchParams({ ...searchParams, sort, page: 1 });
  }

  function toggleFilterModal() {
    setShowFiltersModal(!showFiltersModal);
  }

  async function loadPlants(canReset = false) {
    const limit = 20;
    if (loading) {
      return;
    }

    // console.log(`plantsListApp[${plants.length}]  totalPlantsFromApi[${totalPlants}]`);
    if (!canReset && totalPlants > 0 && plants.length === totalPlants) {
      console.log('limite atingido de plantas');
      console.log('ultima planta', plants[plants.length - 1]);
      return;
    }

    setLoading(true);

    // ToastAndroid.show('Carregando...', ToastAndroid.SHORT);

    let response: any = {};

    try {
      // console.log(searchParams);
      response = await api.get('plants', { params: searchParams });
    } catch (error) {
      console.log(error);
      return;
    }

    const plantsRows: any[] = [];

    const {
      total,
      data: plantsData,
      totalPages: pages,
      currentPage,
    } = response.data;

    plantsData.forEach((plant: PlantDataInterface) => {
      plant.powerEfficiency = 0;
      // console.log(plant.power_current, plant.power_total, Math.ceil(plant.power_current / plant.power_total * 100));
      if (plant.power_current && plant.power_total) {
        plant.powerEfficiency = Math.ceil(
          (plant.power_current / plant.power_total) * 100,
        );
      }

      let elapsedTime = DateTime.fromISO(plant.updated_at).toRelative();

      const rowData = [
        plant.name, // Nome
        // plant.online ? 'Online' : 'Offline',
        <StatusIcon isOnline={plant.online} />,
        locale.formatToUnit(plant.generation_today, 'Wh'), // Hoje
        locale.formatToUnit(plant.power_current, 'W'), // Potência atual
        locale.formatToUnit(plant.generation_total, 'Wh'), // Total
        locale.formatToUnit(plant.power_total, 'W'), // Capacidade
        locale.capitalize(plant.inverter_brand),
        elapsedTime,
      ];
      plantsRows.push(rowData);
    });

    // console.log([...plantsRows][0]);

    // console.log('Total de páginas: ', pages);

    setTotalPLants(total);

    // setPlants([...plants, ...plantsData]);
    if (canReset) {
      setPlants([]);
      setPlants([...plantsRows]);
    } else {
      setPlants([...plants, ...plantsRows]);
    }

    setSearchParams({ ...searchParams, page: searchParams.page + 1 });

    setTotalPages(pages);
    console.log('Terminou  de  carregar');
    setLoading(false);
  }

  const renderModalHeader = () => {
    return (
      <FilterHeaderContent>
        <ModalHeader>Filtros</ModalHeader>
        <FiltersReset>Limpar</FiltersReset>
      </FilterHeaderContent>
    );
  };

  const renderModalFooter = () => {
    return (
      <ModalFooter>
        <ButtonResetFilters>
          <ButtonTextReset>Limpar</ButtonTextReset>
        </ButtonResetFilters>
        <ButtonApplyFilters>
          <ButtonText>Aplicar</ButtonText>
        </ButtonApplyFilters>
      </ModalFooter>
    );
  };

  const renderDataTableFooter = () => {
    if (!loading) return null;
    return (
      <SkeletonPlaceholder speed={800} backgroundColor="#f2f5f7" highlightColor="#ededed" >
        <View style={{ flexDirection: 'row'}}>
          <View >
            {
              [...Array(13)].map((e, i) => (
                <View key={String(i)}
                style={{ marginTop: 6, width: 930, height: 40, borderRadius: 4 }}
              />
              ))
            }
          </View>
        </View>
      </SkeletonPlaceholder>
    );
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      {/* <Text>Exibindo { plants.length } planta(s). Página { searchParams.page } de { totalPages }</Text> */}

      <FloatButton icon="filter" onPress={() => toggleFilterModal()} />

      <DataTable
        headerData={headerData}
        data={plants}
        onEndReached={() => loadPlants(false)}
        onPressHeader={onPressTableHeader}
        renderFooter={renderDataTableFooter}
      />

      <ScrollableModal
        isVisible={showFiltersModal}
        close={() => setShowFiltersModal(false)}
        footer={renderModalFooter()}
      >
        <FiltersContainer>
          <FilterType>
            <SearchInput
              placeholder="Filtrar pelo nome da planta..."
              onChangeText={(name: string) => setSearchParams({ name })}
              value={searchParams.name}
            />
            <Divider />
          </FilterType>
          <FilterType>
            <FilterTypeLabel>Status</FilterTypeLabel>
            <RadioButtonContent>
              <RadioButtonLabel>Todos</RadioButtonLabel>
              <RadioButton
                value=""
                status={searchParams.online === '' ? 'checked' : 'unchecked'}
                onPress={() => setSearchParams({ online: '' })}
                color="#0D134E"
              />
            </RadioButtonContent>
            <Divider />
            <RadioButtonContent>
              <RadioButtonLabel>Online</RadioButtonLabel>
              <RadioButton
                value="1"
                status={searchParams.online === '1' ? 'checked' : 'unchecked'}
                onPress={() => setSearchParams({ online: '1' })}
                color="#0D134E"
              />
            </RadioButtonContent>
            <Divider />
            <RadioButtonContent>
              <RadioButtonLabel>Offline</RadioButtonLabel>
              <RadioButton
                value="0"
                status={searchParams.online === '0' ? 'checked' : 'unchecked'}
                onPress={() => setSearchParams({ online: '0' })}
                color="#0D134E"
              />
            </RadioButtonContent>
            <Divider />
          </FilterType>
          <FilterType>
            <FilterTypeLabel>Marca</FilterTypeLabel>
            <Divider />
          </FilterType>
          <FilterType>
            <FilterTypeLabel>Cidade</FilterTypeLabel>
          </FilterType>
        </FiltersContainer>
      </ScrollableModal>
    </Container>
  );
};

export default Plants;
