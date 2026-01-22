import { Request, Response } from 'express';
import Item from '../models/item.model';

export const createItem = async (req: Request, res: Response) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create item' });
  }
};

export const getItems = async (_req: Request, res: Response) => {
  const items = await Item.find();
  res.json(items);
};

export const getItemById = async (req: Request, res: Response) => {
  const item = await Item.findById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json(item);
};

export const updateItem = async (req: Request, res: Response) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json(item);
};

export const deleteItem = async (req: Request, res: Response) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json({ message: 'Item deleted' });
};
