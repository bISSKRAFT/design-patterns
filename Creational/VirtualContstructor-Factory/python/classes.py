from abc import ABC, abstractmethod

class Product(ABC):

    @abstractmethod
    def do_stuff(self):
        pass


class Creator(ABC):

    # this is the factory method
    @abstractmethod
    def create_product(self) -> Product:
        pass

    def some_operation(self):
        p: Product = self.create_product()
        p.do_stuff()
