from classes import Product, Creator

class ConcreteProduct(Product):

    def do_stuff(self):
        print('ConcreteProduct did somehting')

class ConcreteCreator(Creator):

    def create_product(self) -> Product:
        return ConcreteProduct()


creator: Creator = ConcreteCreator()
creator.some_operation()
